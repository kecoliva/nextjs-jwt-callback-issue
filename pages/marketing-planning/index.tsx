import Head from 'next/head'
import { ReactElement } from 'react'
import Card from '../../components/Admin/Card.component'
import IconCard from '../../components/Admin/IconCard.component'
import AdminLayout from '../../layouts/Admin.layout'
import { NextPageWithLayout } from '../../types/NextPageWithLayout.type'

const Dashboard: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Daily Press - Marketing Planning</title>
    </Head>
    <div className="mx-auto grid h-300 w-275 grid-cols-6 grid-rows-14 gap-5">
      <Card title="Marketing Plan Calendar" className="col-span-4 row-span-5">
        <div></div>
      </Card>
      <IconCard title="Logistics" className="row-span-2" />
      <IconCard title="Reporting" className="row-span-2" />
      <Card title="Website Impressions" className="col-span-2 row-span-6">
        <div></div>
      </Card>
      <Card title="Job List" className="col-span-4 row-span-9">
        <div></div>
      </Card>
      <Card title="EDM Reach" className="col-span-2 row-span-6">
        <div></div>
      </Card>
    </div>
  </>
)

Dashboard.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>

export default Dashboard
