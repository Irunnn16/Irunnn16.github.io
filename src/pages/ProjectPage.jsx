import { useState } from "react"
import { useEffect } from "react"

const ProjectPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch('/json/projectData.json')
    .then((response) => response.json())
    .then ((data) => setDatas(data));
  }, []);
  return (
    <>
    <h1 className="text-5xl text-bo">hallo</h1>
    <p>berikut ini adalah beberapa projecet yang telah saya kerjakan, secara individu maupun dengan tim saya, silahkan dilihat lihat siapa tau anda tertarik dengan project saya</p>

    <div className="masonry">
      {datas.map(data => (
        <div className="card-masonry-item bg-base-200 hover:scale-105" key={data.id}>
          <figure className="aspect-video w-full">
            <img src="https://robohash.org/${data.name}" alt=""  />
          </figure>
          <div className="card-body">
            <p className="flex flex-col">
              <h3 className="card-title">{data.name}</h3>
              {data.age }
            </p>
            <p>
              {data.email}
            </p>
          </div>
        </div>
        ))}
    </div>
    </>
  )
}

export default ProjectPage
