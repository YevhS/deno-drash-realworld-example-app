import { Drash } from "./deps.ts";

// Resources
import ArticlesResource from "./resources/articles_resource.ts";
import HomeResource from "./resources/home_resource.ts";
import RegisterResource from "./resources/register_resource.ts";
import TagsResource from "./resources/tags_resource.ts";
import UserResource from "./resources/user_resource.ts"
import UsersLoginResource from "./resources/users/login_resource.ts"

// Middleware
import AuthMiddleware from "./middlewares/auth_middleware.ts";
import LogMiddleware from "./middlewares/log_middleware.ts";

const server = new Drash.Http.Server({
  directory: ".",
  response_output: "application/json",
  resources: [
    ArticlesResource,
    HomeResource,
    RegisterResource,
    TagsResource,
    UsersLoginResource,
    UsersLoginResource,
  ],
  static_paths: ["/public"],
  views_path: "./public/views",
  template_engine: true,
});

server.run({
  hostname: "realworld_drash",
  port: 1667
});

console.log('Drash server running on realworld_drash:1667')
console.log('Navigate to localhost:8080 for a proxy pass, or localhost:1667 to be direct')
