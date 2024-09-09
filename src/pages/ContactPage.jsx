import { Instagram } from "lucide-react"
import { Mail } from "lucide-react"
import { Send } from "lucide-react"

const ContactPage = () => {
  return (
    <>
    <div className="grid grid-cols-2 gap-10">
      <div className="space-y-10">
        <h2 className="text-5xl tetx-bold">Contact</h2>
        <p>Hubungi kami di:</p>
        <ul>
          <li>Alamat: Jalan Gajayana, No. 123</li>
          <li>Email: info@website.com</li>
          <li>Telepon: 0812-3456-7890</li>
        </ul>
      <div className="space-x-4">
        <button className="btn">
          <Mail size={20}/>
          <span>Khoirunnugraha145@gmail.com</span>
        </button>
        <button className="btn">
          <Instagram size={20}/>
          <span>Nnugrh_16</span>
        </button>
      </div>
      </div>

      <div className="card bg-base-200">
        <div className="card-body">
          <h3 className="card-title">Kontak saya</h3>
          <div className="py-4 space-y-2">
          <input type="text" className="input w-full" placeholder="Nama Email Kamu"/>
          <textarea type="text" className="textarea w-full" rows={5} placeholder="Silahakan Tentukan Pesan Anda"></textarea>

          </div>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Send size={20} />
              <span>Kirim Pesan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactPage
