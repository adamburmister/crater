use Mix.Config

config :ex_debug_toolbar,
  enable: true

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with brunch.io to recompile .js and .css sources.
config :crater, CraterWeb.Endpoint,
  instrumenters: [ExDebugToolbar.Collector.InstrumentationCollector],
  http: [port: 4000],
  debug_errors: true,
  code_reloader: true,
  check_origin: false,
  watchers: [
    {"node", [
      "node_modules/webpack/bin/webpack.js",
      "--watch-stdin",
      "--colors"
    ]}
  ]

config :phoenix, :template_engines,
  eex: ExDebugToolbar.Template.EExEngine,
  exs: ExDebugToolbar.Template.ExsEngine

# Watch static and templates for browser reloading.
config :crater, CraterWeb.Endpoint,
  live_reload: [
    patterns: [
      ~r{priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$},
      ~r{priv/gettext/.*(po)$},
      ~r{lib/crater/web/views/.*(ex)$},
      ~r{lib/crater/web/templates/.*(eex)$}
    ]
  ]

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 20

# Configure your database
config :crater, Crater.Repo,
  adapter: Ecto.Adapters.Postgres,
  loggers: [ExDebugToolbar.Collector.EctoCollector, Ecto.LogEntry],
  username: "postgres",
  password: "postgres",
  database: "crater_dev",
  hostname: "localhost",
  pool_size: 10
