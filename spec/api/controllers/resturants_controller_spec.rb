# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::ResturantsController, type: :controller do
  describe 'GET #index' do
    it 'return http_success' do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST #create' do
    context 'valid_params' do
      let(:valid_params) { FactoryBot.attributes_for(:resturant) }
      it 'create a resturant with valid params and return status create' do
        post :create, params: { resturant: valid_params }
        expect(response).to have_http_status(:created)
      end
    end
  end
end
