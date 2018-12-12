# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::ReviewsController, type: :controller do
  let!(:japanease_resturant) { FactoryBot.create(:resturant, :japanease) }
  let!(:review_a) { FactoryBot.create(:review, :good, resturant: japanease_resturant) }
  let!(:review_b) { FactoryBot.create(:review, :bad, resturant: japanease_resturant) }

  describe 'GET #index' do
    it 'return http_success' do
      get :index, params: { resturant_id: japanease_resturant.id }
      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST #create' do
    context 'valid_params' do
      let(:valid_params) { FactoryBot.attributes_for(:review, :good) }
      it 'create a review with valid params and return status create' do
        post :create, params: { review: valid_params, resturant_id: japanease_resturant.id }
        expect(response).to have_http_status(:created)
      end
    end
  end
end
