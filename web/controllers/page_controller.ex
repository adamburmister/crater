defmodule Crater.PageController do
  use Crater.Web, :controller
  require Logger

  def index(conn, _params) do
    initial_state = %{}
    react_stdio_args = %{
      component: Application.app_dir(:crater, "priv/server/js/server.bundle.js"),
      props: %{
        "location" => conn.request_path,
        "initial_state" => initial_state
      }
    }
    {:ok, %{"html" => html}} = StdJsonIo.json_call(react_stdio_args)
    render(conn, "index.html", html: "", initial_state: initial_state)
  end
end
