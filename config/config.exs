# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :crater,
  ecto_repos: [Crater.Repo]

# Configure email sending via Bamboo
config :crater, Crater.Mailer,
  adapter: Bamboo.LocalAdapter

# Configures the endpoint
config :crater, CraterWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "aK8uak/0T7HlMb5XumvSMQw3j/6GWD1Nc613V5dLG9Bz1Tzggvtaadc+Sq3DNdee",
  render_errors: [view: CraterWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Crater.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
