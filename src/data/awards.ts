import { team } from "@/data/team";

export interface AwardGrant {
  id: string;
  title: string;
  name: string;
  position: string;
}

// export const awards: AwardGrant[] = team.flatMap((member) =>
//   (member.awards ?? []).map((award, index) => ({
//     id: `${member.id}-award-${index}`,
//     title: award,
//     name: member.name,
//     position: member.status,
//   }))
// );

export const awards: AwardGrant[] = [
    {
        id: "yixinwen-award-1",
        title: "NSF 25-530 Collaborative Research: CAIG: Reliable Uncertainty-Aware Generative Downscaling for Geoscience Data",
        name: "Yixin Wen",
        position: "Principal Investigator"
    },
    {
        id: "yixinwen-award-2",
        title: "NASA NNH23ZDA001N-EEJ: A.47 Earth Action: Community Action for Equity and Environmental Justice, Building Co-Design and Co-Learning Digital Twins against Floods on Tribal Lands in support of Indigenous Communities",
        name: "Yixin Wen",
        position: "Co-Investigator"
    },
    {
        id: "jesse-kisembe-award-1",
        title: "NASA FINESST Award: Delineating and Characterizing Dry Spell Events in the Horn of Africa",
        name: "Jesse Kisembe",
        position: "Investigator"
    },
    {
        id: "yixinwen-award-3",
        title: "NASA Jet Propulsion Laboratory, California Institute of Technology A19-0075-001, Analysis of the performance of the Atmospheric Infrared Sounder (AIRS) retrieval system",
        name: "Yixin Wen",
        position: "Principal Investigator"
    },
    {
        id: "yixinwen-award-4",
        title: "University of Oklahoma Cooperative Institute for Mesoscale Meteorological Studies (CIMMS) Director’s Directed Research Fund, Understanding satellite-derived cloud properties using polarimetric classification of hydrometeor types from WSR-88D radars.",
        name: "Yixin Wen",
        position: "Principal Investigator"
    },
    {
        id: "yixinwen-award-5",
        title: "NASA Oklahoma EPSCoR Research Initiation Grant, Development of a joint ground polarimetric radar and satellite database.",
        name: "Yixin Wen",
        position: "Principal Investigator"
    }
]