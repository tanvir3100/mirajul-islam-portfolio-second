import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
} from "react-simple-maps";

// import geoData from "../../../public/features.json"
// console.log(geoData)

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-10.0, -52.0, 0],
                center: [-5, -3],
                scale: 1100,
            }}
            style={{
                width: "100%",
                height: "100%",
                color: "#2C065D",
            }}
        >
            {/* Geographies */}
            <Geographies geography='../../../public/features.json' fill="#2C065D" stroke="#FFFFFF" strokeWidth={0.5}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>

            {/* Annotation */}
            <Annotation
                subject={[2.3522, 48.8566]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: "#FFFFFF",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFFFFF">
                    {"Bangladesh"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default Map;
