defmodule CraterWeb.SnippetController do
  use CraterWeb, :controller

  alias Crater.Snippets
  alias Crater.Snippets.Snippet

  action_fallback CraterWeb.FallbackController

  def index(conn, _params) do
    snippets = Snippets.list_snippets()
    render(conn, "index.json", snippets: snippets)
  end

  def create(conn, %{"snippet" => snippet_params}) do
    with {:ok, %Snippet{} = snippet} <- Snippets.create_snippet(snippet_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", snippet_path(conn, :show, snippet))
      |> render("show.json", snippet: snippet)
    end
  end

  def show(conn, %{"id" => id}) do
    snippet = Snippets.get_snippet!(id)
    render(conn, "show.json", snippet: snippet)
  end

  def update(conn, %{"id" => id, "snippet" => snippet_params}) do
    snippet = Snippets.get_snippet!(id)

    with {:ok, %Snippet{} = snippet} <- Snippets.update_snippet(snippet, snippet_params) do
      render(conn, "show.json", snippet: snippet)
    end
  end

  def delete(conn, %{"id" => id}) do
    snippet = Snippets.get_snippet!(id)
    with {:ok, %Snippet{}} <- Snippets.delete_snippet(snippet) do
      send_resp(conn, :no_content, "")
    end
  end
end
