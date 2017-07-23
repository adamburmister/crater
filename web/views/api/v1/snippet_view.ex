defmodule Crater.Api.V1.SnippetView do
  use Crater.Web, :view

  def render("index.json", %{snippets: snippets}) do
    %{data: render_many(snippets, Crater.Api.V1.SnippetView, "snippet.json")}
  end

  def render("show.json", %{snippet: snippet}) do
    %{data: render_one(snippet, Crater.Api.V1.SnippetView, "snippet.json")}
  end

  def render("snippet.json", %{snippet: snippet}) do
    %{
      id: snippet.id,
      title: snippet.title,
      language: snippet.language,
      body: snippet.body,
      description: snippet.description
    }
  end
end
