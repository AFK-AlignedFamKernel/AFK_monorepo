import type { FastifyInstance } from "fastify";
import buyCoinRoute from "./routes/indexer/buy-coin";
import deployLaunchRoute from "./routes/indexer/deploy-launch";
import deployTokenRoute from "./routes/indexer/deploy-token";
import graphRoute from "./routes/indexer/graph";
import holdingsRoute from "./routes/indexer/holdings";

function declareRoutes(fastify: FastifyInstance) {
  fastify.register(buyCoinRoute);
  fastify.register(deployLaunchRoute);
  fastify.register(deployTokenRoute);
  fastify.register(graphRoute);
  fastify.register(holdingsRoute);
}

export default declareRoutes;
