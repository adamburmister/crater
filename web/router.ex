defmodule Crater.Router do
  use Crater.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Crater do
    pipe_through :browser # Use the default browser stack

    # Note that you have to set the same routes in React again. Why? If I set
    # everything in this scope as `/*path`, for some reason it overrides the
    # API routes as well, even it's EXPLICITLY set on a separate scope.
    #
    # I don't even know whether to blame React or Phoenix. Idk. I need to eat.
    get "/", PageController, :index
    get "/snippets/*path", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api", Crater, as: :api do
    pipe_through :api

    scope "/v1", Api.V1, as: :v1 do
      resources "/snippets", SnippetController, only: [:index, :show, :create]
    end
  end
end
