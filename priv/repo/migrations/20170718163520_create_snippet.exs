defmodule Crater.Repo.Migrations.CreateSnippet do
  use Ecto.Migration

  def change do
    create table(:snippets, primary_key: false) do
      # Timestamps should be inserted immediately after the primary key in the
      # table. This ensures that when we add a new migration to the same table,
      # we have a clean data when we SELECT them.
      add :id, :uuid, primary_key: true
      timestamps()

      add :title, :string
      add :body, :text
      add :description, :text
    end

  end
end
