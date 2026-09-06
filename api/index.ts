import app from "../server.js";

export default function handler(req: any, res: any) {
  // Normalize URL in case Vercel stripped '/api' during routing/rewrite
  if (req.url && !req.url.startsWith("/api") && !req.url.startsWith("/assets")) {
    req.url = "/api" + (req.url.startsWith("/") ? req.url : "/" + req.url);
  }
  return app(req, res);
}
