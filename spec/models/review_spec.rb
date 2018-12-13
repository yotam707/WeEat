# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should belong_to(:resturant) }

  describe 'review with a valid input' do
    let(:wrong_review) { FactoryBot.create(:review, :wrong_rating) }
    it 'should throw error for wring rating value' do
      expect { FactoryBot.create(:review, rating: wrong_review.rating) }.to raise_error(/Validation failed: Rating must be less than or equal to 3/)
    end
  end
end
