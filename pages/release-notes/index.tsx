import Collapes from 'components/Collapse'
import NoData from 'components/NoContent'
import { fetchData } from 'utils/getServerSideData'
import { generateNotesData } from 'utils/sprintTransform'
import { IReleaseNote } from 'interfaces'
import { MainWrapper, Wrapper, HeadinWrapper, CollapesWrapper } from 'styles/pages/releaseNotes'

const ReleaseNotesPage = (notes: { notes: IReleaseNote[] }) => {
  const notesData = generateNotesData(notes?.notes)
  return (
    <MainWrapper>
      <Wrapper>
        <HeadinWrapper>Release Notes</HeadinWrapper>
        {notes?.notes?.length > 0 ? (
          <CollapesWrapper>
            <Collapes items={notesData} bordered={false} />
          </CollapesWrapper>
        ) : (
          <NoData
            heading="No Release Notes Available!"
            message="There are currently no release notes to display. Please check back later for updates."
          />
        )}
      </Wrapper>
    </MainWrapper>
  )
}

export async function getServerSideProps() {
  try {
    const notes = await fetchData('release-note/project/beckn-xplor')

    return {
      props: {
        notes: notes.data[0].release_notes,
      },
    }
  } catch (error) {
    return {
      props: {
        error: 'Failed to fetch data',
      },
    }
  }
}

export default ReleaseNotesPage
