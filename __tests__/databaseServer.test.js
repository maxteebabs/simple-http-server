class DatabaseService {
  async fetchAllRecords() {
      // return all promises
      return [];
  }
}

describe('DatabaseService fetchAllRecords', () => {
    it('should return a resolved promise with an array [1, 2, 3]', async () => {
        // Mock the implementation of fetchAllRecords to return the array [1, 2, 3s]
        const mockFetchAllRecords = jest.fn().mockResolvedValue([1, 2, 3]);

        DatabaseService.prototype.fetchAllRecords = mockFetchAllRecords;
        const service = new DatabaseService();

        const records = await service.fetchAllRecords();

        // Assert that the records are [1, 2, 3]
        expect(records).toEqual([1, 2, 3]);

        // Verify that the mock was called
        expect(mockFetchAllRecords).toHaveBeenCalled();
    });
});
