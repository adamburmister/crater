defmodule Crater.Snippets.Snippet do
  use Ecto.Schema
  import Ecto.Changeset
  alias Crater.Snippets.Snippet

  # :binary_id is managed by drivers/adapters, it will be UUID for mysql
  # but can be ObjectID if later you decide to use mongo
  @primary_key {:id, :binary_id, autogenerate: true}

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
    |> validate_required([:title, :language, :body])
  end
end
