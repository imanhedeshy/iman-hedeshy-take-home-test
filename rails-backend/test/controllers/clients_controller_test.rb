require 'test_helper'

class ClientsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @client = clients(:one)
  end

  test "should get index" do
    get clients_url
    assert_response :success
  end

  test "should show client" do
    get client_url(@client)
    assert_response :success
  end

  test "should create client" do
    assert_difference('Client.count') do
      post clients_url, params: { client: { name: 'New Client', email: 'newclient@example.com', plan: 'basic' } }
    end
    assert_response :created
  end

  test "should update client" do
    patch client_url(@client), params: { client: { name: 'Updated Name' } }
    assert_response :success
  end

  test "should destroy client" do
    assert_difference('Client.count', -1) do
      delete client_url(@client)
    end
    assert_response :no_content
  end

  test "should get providers for client" do
    get providers_client_url(@client)
    assert_response :success
  end

  test "should get journal entries for client" do
    get client_journal_entries_url(@client)
    assert_response :success
  end
end
