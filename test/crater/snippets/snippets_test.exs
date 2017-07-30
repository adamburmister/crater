defmodule Crater.SnippetsTest do
  use Crater.DataCase

  alias Crater.Snippets

  describe "snippets" do
    alias Crater.Snippets.Snippet

    @valid_attrs %{body: "some body", description: "some description", language: "some language", title: "some title"}
    @update_attrs %{body: "some updated body", description: "some updated description", language: "some updated language", title: "some updated title"}
    @invalid_attrs %{body: nil, description: nil, language: nil, title: nil}

    def snippet_fixture(attrs \\ %{}) do
      {:ok, snippet} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Snippets.create_snippet()

      snippet
    end

    test "list_snippets/0 returns all snippets" do
      snippet = snippet_fixture()
      assert Snippets.list_snippets() == [snippet]
    end

    test "get_snippet!/1 returns the snippet with given id" do
      snippet = snippet_fixture()
      assert Snippets.get_snippet!(snippet.id) == snippet
    end

    test "create_snippet/1 with valid data creates a snippet" do
      assert {:ok, %Snippet{} = snippet} = Snippets.create_snippet(@valid_attrs)
      assert snippet.body == "some body"
      assert snippet.description == "some description"
      assert snippet.language == "some language"
      assert snippet.title == "some title"
    end

    test "create_snippet/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Snippets.create_snippet(@invalid_attrs)
    end

    test "update_snippet/2 with valid data updates the snippet" do
      snippet = snippet_fixture()
      assert {:ok, snippet} = Snippets.update_snippet(snippet, @update_attrs)
      assert %Snippet{} = snippet
      assert snippet.body == "some updated body"
      assert snippet.description == "some updated description"
      assert snippet.language == "some updated language"
      assert snippet.title == "some updated title"
    end

    test "update_snippet/2 with invalid data returns error changeset" do
      snippet = snippet_fixture()
      assert {:error, %Ecto.Changeset{}} = Snippets.update_snippet(snippet, @invalid_attrs)
      assert snippet == Snippets.get_snippet!(snippet.id)
    end

    test "delete_snippet/1 deletes the snippet" do
      snippet = snippet_fixture()
      assert {:ok, %Snippet{}} = Snippets.delete_snippet(snippet)
      assert_raise Ecto.NoResultsError, fn -> Snippets.get_snippet!(snippet.id) end
    end

    test "change_snippet/1 returns a snippet changeset" do
      snippet = snippet_fixture()
      assert %Ecto.Changeset{} = Snippets.change_snippet(snippet)
    end
  end
end
