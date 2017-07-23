defmodule Crater.Api.V1.SnippetController do
  use Crater.Web, :controller

  alias Crater.Snippet

  def index(conn, _params) do
    snippets = Repo.all(Snippet)
    render(conn, "index.json", snippets: snippets)
  end

  def show(conn, %{"id" => id}) do
    snippet = Repo.get!(Snippet, id)
    render(conn, "show.json", snippet: snippet)
  end
end
