import SiteLayout from "../src_2/containers/Donation/Layout/SiteLayout";
import styled from 'styled-components';

const InfoCancro = () => (
  <div>
      <section className="bg-gray-100 dark:bg-gray-900 lg:py-28 lg:flex flex-col lg:justify-center items-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:rounded-lg lg:h-full"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")',
              }}
            />
          </div>
          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
              Cos'è il{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                tumore?
              </span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Il tumore, noto anche come cancro nel caso di tumori maligni o
              neoplasia, è una massa di tessuto che cresce in eccesso ed in modo
              scoordinato rispetto ai tessuti normali, e che persiste in questo
              stato dopo la cessazione degli stimoli che hanno indotto il
              processo (cit. in Robbins Basic Pathology, 8ª edizione,
              Saunders/Elsevier 2007, cap. 6).
            </p>
          </div>
        </div>

        <div className="pt-20 pl-40 pr-40 text-left">
          <p>
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsum
          </p>
        </div>
      </section>
  </div>
);

InfoCancro.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default InfoCancro;

const Section = styled.section`
  padding-top: 100px;
  // padding-bottom: 100px;
`;
