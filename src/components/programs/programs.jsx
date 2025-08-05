import Program from "../program/program";
import './programs.css'

export default function Programs() {
    return (
        <>
            <div className="coursecontainer container" id="programs">
                <div className="courses">
                    <Program course="Basic" />
                    <Program course="MS Office" />
                    <Program course="Tally ERP9" />
                    <Program course="Tally Prime 5.1" />
                </div>
                <div className="courses">
                    <Program course="GST" />
                    <Program course="Data Entry" />
                    <Program course="Internet" />
                    <Program course="C language" />
                </div>
                <div className="courses">
                    <Program course="C++" />
                    <Program course="PhotoShop" />
                    <Program course="Corel Draw" />
                    <Program course="Page Maker" />
                </div>
                <div className="courses">
                    <Program course="Indigen" />
                    <Program course="Nudi kannada" />
                    <Program course="DCA" />
                    <Program course="DCFC" />
                </div>
                <div className="courses">
                    <Program course="Spoken English" />
                </div>
            </div>
        </>
    )
}