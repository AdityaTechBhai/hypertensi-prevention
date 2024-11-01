import sponsorList from "../../constant/sponsorList";

const Sponsor = () => {
    return (
        <div className="flex flex-col space-y-5">
            <p className="font-semibold text-neutral-300">Trusted by millions across the globe:</p>
            <div className="flex flex-wrap gap-5">
                {sponsorList.map((sponsor, index) => (
                    <div key={index} className="flex items-center">
                        {sponsor.svg}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsor;
