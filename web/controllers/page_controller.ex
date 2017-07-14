defmodule Crater.PageController do
  use Crater.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
