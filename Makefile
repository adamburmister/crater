setup:
	mix deps.get && yarn install && mix ecto.setup

web:
	mix phx.server
