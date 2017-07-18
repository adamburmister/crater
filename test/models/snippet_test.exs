defmodule Crater.SnippetTest do
  use Crater.ModelCase

  alias Crater.Snippet

  @valid_attrs %{body: "some content", description: "some content", title: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Snippet.changeset(%Snippet{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Snippet.changeset(%Snippet{}, @invalid_attrs)
    refute changeset.valid?
  end
end
