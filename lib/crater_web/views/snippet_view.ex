defmodule CraterWeb.SnippetView do
  use CraterWeb, :view
  alias CraterWeb.SnippetView

  def render("index.json", %{snippets: snippets}) do
    %{data: render_many(snippets, SnippetView, "snippet.json")}
  end

  def render("show.json", %{snippet: snippet}) do
    %{data: render_one(snippet, SnippetView, "snippet.json")}
  end

  def render("snippet.json", %{snippet: snippet}) do
    %{id: snippet.id,
      title: snippet.title,
      language: snippet.language,
      body: snippet.body,
      description: snippet.description}
  end
end
