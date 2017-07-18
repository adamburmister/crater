defmodule Crater.Repo.Migrations.CreateSnippet do
  use Ecto.Migration

  def change do
    create table(:snippets, primary_key: false) do
      add :id, :uuid, primary_key: true
      add :title, :string
      add :body, :text
      add :description, :text

      timestamps()
    end

  end
end
