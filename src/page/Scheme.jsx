import React from 'react'
import one from './image/bg3.webp'
import { Container } from 'react-bootstrap'
const Scheme = () => {
  return (
    <div>
<div className="jumbotron mt-5">
        <div className="container mt-5">
          <h1 className="display-3 pt-5 pb-3">Schemes</h1>
          <p className="pb-5">These are the list of schemes provided by the government, to ensure the benefits reach the farmers without the involvement of middlemen.</p>
         
        </div>
      </div>

      <div className="container">
        
        <div className="row">
          <div className="col-md-4">
            <h2>Agriculture infrastructure fund</h2>
            <p className=''>The Union Cabinet in July 2020 has approved a new pan India Central Sector Scheme called Agriculture Infrastructure Fund (National Agriculture Infra Financing Facility). The scheme shall provide a medium - long term debt financing facility for investment in viable projects for post-harvest management Infrastructure and community farming assets through interest subvention.
            </p>
            <a className="btn btn-success mt-3" href="https://agriinfra.dac.gov.in/Home/BeneficiaryRegistration" role="button">View details »</a>
          </div>
          <div className="col-md-4 mt-2">
            <h2>Credit facility for farmers</h2>
            <p className='mt-5 mb-5'>Loan facility is available through a large network of Commercial Banks, Regional Rural Banks and Cooperative Credit Institutions in the country to fulfill the crop loan and term loan needs of the farmers. This scheme enables farmers to access extra credit that can be used for farming practices.
            </p>
           
            <div><a className="btn btn-success mt-3" href="#" role="button">View details »</a>
            </div>
          </div>
          <div className="col-md-4">
            <h2>KCC for animal husbandry and fiseries</h2>
            <p className="mb-5">To provide adequate and timely credit support under a single window to the farmers for activities related to Animal Husbandry and Fisheries. This enables the farmers to access additional income other than farming practices and also improve over-all farming environment and economy.
            </p><a className="btn btn-success mt-4" href="#" role="button">View details »</a>
          </div>
        </div>
        
        <hr/>
        
      </div>

      <div className="container">
        
        <div className="row">
          <div className="col-md-4">
            <h2>Pradhan Mantri Kisan Samman Nidhi</h2>
            <p className=''>Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a new Central Sector Scheme to provide income support to all landholding farmers' families in the country to supplement their financial needs for procuring various inputs related to agriculture and allied activities as well as domestic needs.
</p>
            <a className="btn btn-success mt-5" href="https://fw.pmkisan.gov.in/NewHome3.aspx" role="button">View details »</a>
          </div>
          <div className="col-md-4">
            <h2>Primary Agricultural Credit Societies (PACS)</h2>
            <p className=' mb-5'>Primary Agricultural Credit Societies (PACS), around 98,995 in number and having a member base of 13 crore, constitute the lowest tier of the Short-Term Cooperative Credit (STCC) structure in the country, providing short-term and medium-term credit and other input services, like seed, fertilizer, pesticide distribution, etc. to member </p>
           
            <div><a className="btn btn-success mt-2" href="#" role="button">View details »</a>
            </div>
          </div>
          <div className="col-md-4">
            <h2>Crop Insurance Schemes</h2>
            <p className="mb-3 mt-5">Four insurance schemes are being implemented namely by the government to support farmers.

Pradhan Mantri Fasal Bima Yojana (PMFBY),
Weather based Crop Insurance Scheme (WBCIS),
Coconut Palm insurance scheme (CPIS) and
Pilot Unified Package insurance scheme UPIS.
</p><a className="btn btn-success mt-5" href="https://vikaspedia.in/agriculture/agri-insurance/operational-guidelines-for-wbcis" role="button">View details »</a>
          </div>
        </div>
        
        <hr/>
        
      </div>


      <footer className="bg-white text-gray-700 text-sm py-3 border-top border-gray-300">
      <Container className="d-flex justify-content-between align-items-center">
        <p className="mb-0">© 2023 Escape. All rights reserved.</p>
        <p className="mb-0 text-gray-500">Made by Team Escape</p>
      </Container>
    </footer>

    </div>
  )
}

export default Scheme;