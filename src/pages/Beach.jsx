import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Beach = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  const imageImports = import.meta.glob("/src/assets/images/beaches/*.{jpg,png}", {
  eager: true,
});

const getImage = (filename) => {
  const path = `/src/assets/images/beaches/${filename}`;
  return imageImports[path]?.default || "";
};



  const beaches = [
    {
      name: "Minh Châu",
      image: [
        getImage("minhchau.png")
      ],
      description:
        "Sở hữu bãi biển trải dài cùng những triền cát trắng mịn, làn nước xanh ngắt. Minh Châu là nơi lý tưởng để khám phá vẻ đẹp dưới lòng đại dương. Hoạt động lặn biển ngắm san hô thu hút nhiều du khách bởi hệ sinh thái phong phú với các loài san hô đa dạng màu sắc và các sinh vật biển thú vị. Du khách sẽ được trang bị đầy đủ dụng cụ và hướng dẫn để có trải nghiệm an toàn và thú vị.",
      note: "Mid vãi",
      summary: "industry baby",
    },
    {
      name: "Quan Lạn",
     image: [
        getImage("quanlan.png")
      ],
      description: "'Bãi biển đẹp nhất nhì miền Bắc, hoang sơ, vắng vẻ, bãi cát trắng, biển xanh trong. Điểm trừ là râc thải nhựa quá nhiều.'",
      note: "Hoang sơ, ít người, hợp picnic, hướng nội",
      summary: "Organic gọi bằng cụ hơi\nIndustry baby",
    },
    {
      name: "Tiên",
      image: [
        getImage("tien.png")
      ],
      description:
        "'Khung cảnh đẹp và yên bình, đường vào xấu, bãi bỏ hoang nên không có hàng quán hay chỗ che chắn gì xất'",
      note: "Không có ai tắm tiên (sad lol). Hoang sơ đúng theo định nghĩa. Đường đi gập ghềnh boombayah vl. Có đứa bảo đ được tắm?? Gần bãi Minh Châu.",
      summary: "Organic gọi bằng cụ",
    },
    {
      name: "Bãi Rùa",
     image: [
        getImage("rua.jpg")
      ],
      description:
        "Bãi Rùa nằm ẩn mình sau mũi Đầu Cào, thuộc đảo Quan Lạn, Vân Đồn, là một thiên đường bí ẩn ít người biết đến. Bãi Rùa Quan Lạn là một bãi biển nhỏ, thanh bình với bờ cát mịn màng và làn nước trong xanh. Tên gọi “Bãi Rùa” gắn liền với hình ảnh những chú rùa biển từng lên bờ đẻ trứng, dù hiện nay không còn thấy nhiều, nhưng cái tên này vẫn vẹn nguyên, nhắc nhớ về một thời kỳ thiên nhiên hoang sơ và đầy kỳ diệu của nơi đây.",
      note: "Gọi là bài rùa vì có của nợ rùa nhựa như trong ảnh. Trông đẹp, hoang sơ. Đ cho tắm, chắc hợp picnic, rửa chân.",
      summary: "Organic gọi bằng cụ",
    },
    {
      name: "Sơn Hào",
      image: [
        getImage("sonhao.png")
      ],
      description:
        "Bãi tắm Sơn Hào có vị trí nằm giữa bãi Minh Châu và Quan Lạn, thuộc Quảng Ninh. Sơn Hào là bãi biển đẹp nổi tiếng trên đảo Quan Lạn, với chiều dài hơn 3km sở hữu nước biển trong xanh và cảnh đẹp thơ mộng. Đặc trưng của bãi tắm Sơn Hào đó là những rặng phi lao cao vút và thảm thực vật đa dạng. Điều đặc biệt của bãi tắm Sơn Hào đó là, nếu nước biển dâng cao thì bãi biển sẽ được thu nhỏ và bờ biển hơi dốc.",
      note: "Được tắm. Hoang sơ như trên.",
      summary: "Organic gọi bằng cụ",
    },
    {
      name: "Bãi Ngọc",
      image: [
        getImage("ngoc.png"),
        getImage("ngoc2.png")
      ],
      description: "'Đi cả đảo thích nhất bãi Ngọc, tuy chưa sạch bằng Minh Châu nhưng cát rất mịn và trắng, nước trong. Bãi khá vắng và yên tĩnh, bơi tẹt luôn. Quán ăn khá ngon và bình dân hơn bên Minh Châu.'",
      note: "Yeah",
      summary: "Organic gọi bằng cụ",
    },
    {
      name: "Robinson",
      image: [
        getImage("robinson.png"),
        getImage("robinson2.png")
      ],
      description:
        "'Vợ mình bảo bãi này đẹp nhất trong các bãi để chụp ảnh. Bãi Minh Châu và Quan Lạn đông nên chụp khó. Các bạn nữ hay ra Robinson chụp nhất khi có bãi cát dài và bãi đá tuyệt đẹp. Buổi chiều đẹp hơn buổi sáng.'",
      note: "Tin vợ ông anh bên cạnh. Thấy các chị em nghe vẻ thích bãi này.",
      summary: "organic",
    },
  ];
  const beach = beaches.find((b) => b.name === decodedName);

  if (!beach) {
    return (
      <div className="p-4 text-center text-red-500">
        <h1 className="text-2xl font-bold">Beach not found</h1>
      </div>
    );
  }

  useEffect(() => {
    console.log("Beach component mounted with name:", name);
  });
  return (
    <>
      <Header header={beach.name} />
      <div className=" flex flex-col h-auto bg-pink-100 absolute top-[30%] left-[20%] w-[15rem] p-2 m-1 border-1 border-pink-600">
        <p className="font-bold text-pink-900 my-2 ml-2">{beach.description}</p>
        {beach.image.map((img, index) => (
            <img
            key={index}
            src={img}
            alt={beach.name}
            className="w-full h-auto rounded-md mb-2"
            />
        ))}
        {beach.note && (
          <div className="bg-yellow-100 p-3 rounded text-yellow-800">
            <strong>Note:</strong> <br />
            {beach.note}
          </div>
        )}

        {beach.summary && (
          <div className="bg-pink-100 p-3 rounded text-pink-700">
            <strong>Summary:</strong> <br />
            {beach.summary}
          </div>
        )}
      </div>
    </>
  );
};

export default Beach;
