setup:
	mix deps.get && yarn install && mix ecto.setup

web:
	mix deps.get && mix phx.server
