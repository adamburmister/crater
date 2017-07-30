defmodule Crater.Repo.Migrations.CreateSnippets do
  use Ecto.Migration

  def change do
    create table(:snippets) do
      add :id, :uuid, primary_key: true
      add :title, :string
      add :language, :string
      add :body, :text
      add :description, :text

      timestamps()
    end

  end
end
