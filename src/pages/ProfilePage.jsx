import { Flame } from "lucide-react"
import { LayoutDashboard } from "lucide-react"

const ProfilePage = () => {
  return (
    <>
     <div className="flex gap-10">
      <div className="flex-1 space-y-10">
        <h1 className="text-5xl text-bo">hallo</h1>
      <p>Halo, perkenalkan nama saya Khoirun Nugraha. Saya memiliki minat yang besar dalam [bidang yang Anda minati, misalnya teknologi, pendidikan, seni, atau lainnya]. Dalam kehidupan sehari-hari, saya selalu berusaha untuk terus belajar dan mengembangkan diri, terutama dalam hal [sebutkan keterampilan atau keahlian yang Anda miliki]. Saya percaya bahwa dengan ketekunan dan semangat, kita bisa mencapai apa pun yang kita inginkan. Senang berkenalan dengan Anda, dan saya berharap kita bisa saling bertukar ilmu dan pengalaman.</p>
      </div>
      <div className="flex-none">
        <div className="avatar">
          <div className="w-48 rounded-lg"><img src="fotoku.jpg" alt="" /></div>
        </div>
      </div>
     </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="card bg-base-200">
          <div className="card-body">
            <div className="h3 card-title">
              <LayoutDashboard className="stroke-accent fill-accent/30" />
              <span>Ui Ux</span>
            </div>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis repudiandae magni culpa laborum quidem praesentium quasi possimus soluta ipsum, suscipit corrupti eum velit aliquid neque tempore rem. Quo, reprehenderit libero.</p>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="h3 card-title">
              <Flame className="stroke-secondary fill-secondary/30" />
              <span>Figma Disigner</span>
              </h3>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis repudiandae magni culpa laborum quidem praesentium quasi possimus soluta ipsum, suscipit corrupti eum velit aliquid neque tempore rem. Quo, reprehenderit libero.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
