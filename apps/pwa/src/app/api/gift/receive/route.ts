import {Readable} from 'node:stream';

import {NextRequest, NextResponse} from 'next/server';

import {pinata} from '@/services/pinata';
import {ErrorCode} from '@/utils/errors';
import {HTTPStatus} from '@/utils/http';

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const requestBody = await request.json();

  // const body = ClaimSchema.safeParse(requestBody);
  // if (!body.success) {
  //   return NextResponse.json(
  //     {code: ErrorCode.BAD_REQUEST, error: body.error},
  //     {status: HTTPStatus.BadRequest},
  //   );
  // }

  try {
    // Verify
    const stream = Readable.fromWeb(file.stream() as any);

    const {IpfsHash} = await pinata.pinFileToIPFS(stream, {
      pinataMetadata: {
        name: file.name,
      },
    });

    return NextResponse.json(
      {hash: IpfsHash, url: `${process.env.IPFS_GATEWAY}/${IpfsHash}`},
      {status: HTTPStatus.OK},
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {code: ErrorCode.TRANSACTION_ERROR, error},
      {status: HTTPStatus.InternalServerError},
    );
  }
}
