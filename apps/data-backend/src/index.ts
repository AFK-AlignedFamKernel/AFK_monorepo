import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import declareRoutes from "./router";
import { launchBot, sendWebAppButton } from "./services/telegram-app";

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify = Fastify({
  logger: true
});
fastify.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
});
declareRoutes(fastify);

fastify.listen(
  { port: Number(process.env.PORT) || 5050, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }

    // try {
    //   launchBot(process.env.TELEGRAM_BOT_TOKEN || "");
    // } catch (error) {
    //   console.error("Error launching bot:", error);
    // }
  }
);
