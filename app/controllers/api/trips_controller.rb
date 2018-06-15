class Api::TripsController < ApplicationController
  before_action :set_trip, only: [:show, :update, :destroy]


  def index
    render json: Trip.all
  end

  def show
    render json: @trip
  end

  def create
    trip = Trip.new(trip_params)
    if trip.save
      render json: trip
    else
      render error(trip)
    end
  end

  def update
    if @trip.update(trip_params)
      render json: trip
    else
      render_error(@trip)
    end
  end

  def destroy
    @trip.destroy
  end


  private

  def set_trip
    @trip = Trip.find(params[:id])
  end

  def trip_params
    params.require(:trip).permit(:name)
end
