import type { FastifyInstance, RouteOptions } from "fastify";
import { prisma } from "indexer-prisma";
import { HTTPStatus } from "../../utils/http";
import { isValidStarknetAddress } from "../../utils/starknet";

interface AllTransactionsParams {
  tokenAddress: string;
}

async function allTransactionsRoute(
  fastify: FastifyInstance,
  options: RouteOptions
) {
  fastify.get<{
    Params: AllTransactionsParams;
  }>("/all-transactions/:tokenAddress", async (request, reply) => {
    try {
      const { tokenAddress } = request.params;
      if (!isValidStarknetAddress(tokenAddress)) {
        reply.status(HTTPStatus.BadRequest).send({
          code: HTTPStatus.BadRequest,
          message: "Invalid token address"
        });
        return;
      }

      const allTransactions = await prisma.token_transactions.findMany({
        where: {
          memecoin_address: tokenAddress
        },
        select: {
          memecoin_address: true,
          price: true,
          liquidityRaised: true,
          total_supply: true,
          network: true
        }
      });

      reply.status(HTTPStatus.OK).send({
        data: allTransactions
      });
    } catch (error) {
      console.error("Error fetching buy tokens:", error);
      reply
        .status(HTTPStatus.InternalServerError)
        .send({ message: "Internal server error." });
    }
  });
}

export default allTransactionsRoute;
