class Api::V1::LogsController < ApplicationController
  def index
    @logs = Log.all
    render json: @logs, serializer: nil
    # fyi the above automatically uses my log_serializer
  end

  def show
    @log = Log.find(params[:id])
    render json: @log
  end
end
