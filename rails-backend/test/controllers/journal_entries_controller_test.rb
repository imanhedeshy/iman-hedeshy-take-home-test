require 'test_helper'

class JournalEntriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @client = clients(:one)
    @journal_entry = journal_entries(:one)
  end

  test "should get index for client's journal entries" do
    get client_journal_entries_url(@client)
    assert_response :success
  end

  test "should show journal entry" do
    get journal_entry_url(@journal_entry)
    assert_response :success
  end

  test "should create journal entry" do
    assert_difference('JournalEntry.count') do
      post client_journal_entries_url(@client), params: { journal_entry: { content: 'New Entry' } }
    end
    assert_response :created
  end

  test "should update journal entry" do
    patch journal_entry_url(@journal_entry), params: { journal_entry: { content: 'Updated Content' } }
    assert_response :success
  end

  test "should destroy journal entry" do
    assert_difference('JournalEntry.count', -1) do
      delete journal_entry_url(@journal_entry)
    end
    assert_response :no_content
  end
end
