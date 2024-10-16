require 'test_helper'

class ProvidersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @provider = providers(:one)
  end

  test "should get index" do
    get providers_url
    assert_response :success
  end

  test "should show provider" do
    get provider_url(@provider)
    assert_response :success
  end

  test "should create provider" do
    assert_difference('Provider.count') do
      post providers_url, params: { provider: { name: 'New Provider', email: 'newprovider@example.com' } }
    end
    assert_response :created
  end

  test "should update provider" do
    patch provider_url(@provider), params: { provider: { name: 'Updated Name' } }
    assert_response :success
  end

  test "should destroy provider" do
    assert_difference('Provider.count', -1) do
      delete provider_url(@provider)
    end
    assert_response :no_content
  end

  test "should get clients for provider" do
    get clients_provider_url(@provider)
    assert_response :success
  end

  test "should get all journal entries for provider" do
    get all_journal_entries_provider_url(@provider)
    assert_response :success
  end
end
