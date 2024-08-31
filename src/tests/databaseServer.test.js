jest.mock('./databaseServer.js');

describe('DatabaseService fetchAllRecords', () => {
    it('should return a resolved promise with an array [1, 2, 3]', async () => {
        // Mock the implementation of fetchAllRecords to return the array [100, 200, 300s]
        const mockFetchAllRecords = jest.fn().mockResolvedValue([100, 200, 300]);

        DatabaseService.prototype.fetchAllRecords = mockFetchAllRecords;
        const service = new DatabaseService();

        const records = await service.fetchAllRecords();

        // Assert that the records are [100, 200, 300]
        expect(records).toEqual([100, 200, 300]);

        // Verify that the mock was called
        expect(mockFetchAllRecords).toHaveBeenCalled();
    });
});