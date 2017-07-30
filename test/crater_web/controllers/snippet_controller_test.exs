defmodule CraterWeb.SnippetControllerTest do
  use CraterWeb.ConnCase

  alias Crater.Snippets
  alias Crater.Snippets.Snippet

  @create_attrs %{body: "some body", description: "some description", language: "some language", title: "some title"}
  @update_attrs %{body: "some updated body", description: "some updated description", language: "some updated language", title: "some updated title"}
  @invalid_attrs %{body: nil, description: nil, language: nil, title: nil}

  def fixture(:snippet) do
    {:ok, snippet} = Snippets.create_snippet(@create_attrs)
    snippet
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all snippets", %{conn: conn} do
      conn = get conn, snippet_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create snippet" do
    test "renders snippet when data is valid", %{conn: conn} do
      conn = post conn, snippet_path(conn, :create), snippet: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, snippet_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "body" => "some body",
        "description" => "some description",
        "language" => "some language",
        "title" => "some title"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, snippet_path(conn, :create), snippet: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update snippet" do
    setup [:create_snippet]

    test "renders snippet when data is valid", %{conn: conn, snippet: %Snippet{id: id} = snippet} do
      conn = put conn, snippet_path(conn, :update, snippet), snippet: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, snippet_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "body" => "some updated body",
        "description" => "some updated description",
        "language" => "some updated language",
        "title" => "some updated title"}
    end

    test "renders errors when data is invalid", %{conn: conn, snippet: snippet} do
      conn = put conn, snippet_path(conn, :update, snippet), snippet: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete snippet" do
    setup [:create_snippet]

    test "deletes chosen snippet", %{conn: conn, snippet: snippet} do
      conn = delete conn, snippet_path(conn, :delete, snippet)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, snippet_path(conn, :show, snippet)
      end
    end
  end

  defp create_snippet(_) do
    snippet = fixture(:snippet)
    {:ok, snippet: snippet}
  end
end
