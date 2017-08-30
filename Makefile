setup:
	mix deps.get && yarn install && (cd assets && yarn install) && mix ecto.setup

web:
	mix deps.get && mix phx.server
