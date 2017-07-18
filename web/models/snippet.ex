defmodule Crater.Snippet do
  use Crater.Web, :model

  # :binary_id is managed by drivers/adapters, it will be UUID for mysql
  # but can be ObjectID if later you decide to use mongo
  @primary_key {:id, :binary_id, autogenerate: true}

  schema "snippets" do
    field :title, :string
    field :body, :string
    field :description, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:title, :body, :description])
    |> validate_required([:title, :body, :description])
  end
end
