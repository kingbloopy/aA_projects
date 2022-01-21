require "rspec"
require "problems"

describe "remove_dups(arr)" do 
    it 'returns unique elements in the order in which they first appeared' do 
        expect(remove_dups([1,2,1,3,3])).to eq([1,2,3])
        expect(remove_dups([1,2,1,4,4])).to eq([1,2,4])
    end
end

describe Array do
    context "Array#two_sum" do
        it 'finds all pairs of positions where the elements at those positions sum to zero' do
            expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
        end
    end
end

describe "my_transpose" do 
    it "converts rows into columns" do 
        arr1 = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ] 
        expected_arr = [[0, 3, 6], [1, 4, 7], [2, 5, 8]]
    expect(my_transpose(arr1)).to eq(expected_arr) 
    end
end

describe "stock_picker(arr)" do 
    it "returns the pair of days with the lowest price and highest price" do
        arr = [4, 10, 7, 13]
        expect(stock_picker(arr)).to eq([4, 13])
    end
end
