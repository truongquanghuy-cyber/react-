import { MOCK_DATA_SHOE } from "./_mock_data_";

export function ShoeShop() {
    const sanPham = MOCK_DATA_SHOE[0];
    return (
        <>
            {MOCK_DATA_SHOE.map((item, index) => (
                <div key={index}>
                    <img src={item.image} width={300} alt="" />
                </div>
            ))}
        </>
    );
}
