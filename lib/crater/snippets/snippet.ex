defmodule Crater.Snippets.Snippet do
  use Ecto.Schema
  import Ecto.Changeset
  alias Crater.Snippets.Snippet


  schema "snippets" do
    field :body, :string
    field :description, :string
    field :language, :string
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(%Snippet{} = snippet, attrs) do
    snippet
    |> cast(attrs, [:title, :language, :body, :description])
    |> validate_required([:title, :language, :body, :description])
  end
end
