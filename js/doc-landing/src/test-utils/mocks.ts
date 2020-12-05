import { Docs, Doc, Breadcrumbs } from '../types'

export const MOCK_DOCS: Docs = {
  'BIO-101': {
    id: 308,
    name: 'Introduction to Biology',
    school: 'Stanford University',
    department: 'BIO',
    text:
      'BIO-101 - Sed vehicula sapien quis lacinia varius. Etiam condimentum tortor quis auctor ullamcorper. Praesent pulvinar nec dui ut eleifend. Vestibulum euismod, metus eu elementum mollis, tellus nulla gravida sem, ut faucibus velit risus quis nunc. In hac habitasse platea dictumst. Maecenas rutrum molestie dapibus. Curabitur hendrerit dui neque, ut feugiat erat facilisis sed. Vestibulum vehicula hendrerit hendrerit. Proin mollis gravida ligula, id aliquet eros congue dapibus. Cras auctor quam urna, tristique dignissim erat elementum eget. Fusce pellentesque egestas metus. Donec id ex nec ante mollis luctus eget ac ante. Pellentesque rhoncus sit amet est id ultrices. Vivamus vehicula enim vel nisi dapibus blandit.',
    related: ['HOW'],
  },
  APP: {
    id: 50,
    name: 'Advanced Python Programming',
    school: 'MIT',
    department: 'CS',
    text:
      'APP - Sed malesuada enim eu elit pretium, eu scelerisque est suscipit. Nunc finibus egestas pulvinar. Praesent et diam nisl. Sed sodales mattis neque, ac egestas nunc placerat vitae. Vestibulum scelerisque enim eu luctus viverra. In in lectus vulputate, semper est nec, lobortis dolor. Fusce sed placerat massa, vulputate tristique nisi. Nullam in justo lacus. Duis posuere porttitor tincidunt. Ut vel sollicitudin leo. Etiam ultricies dolor eu sodales pharetra. Aliquam erat volutpat. In ultrices, libero vel hendrerit egestas, diam magna laoreet massa, ut fermentum nibh ex hendrerit elit. Quisque aliquet pellentesque ipsum, ac congue erat fermentum et. Aliquam nunc ex, tempus sed magna pulvinar, blandit viverra mi. Curabitur sollicitudin justo sem, eu venenatis purus pulvinar vestibulum.',
    related: ['FAM'],
  },
  FAM: {
    id: 297,
    name: 'Foundations of Mathematics',
    school: 'Princeton University',
    department: 'MATH',
    text:
      'FAM - Phasellus ultrices elit eget condimentum blandit. Suspendisse facilisis gravida laoreet. Sed sodales lorem eget odio vehicula suscipit. Vestibulum sit amet est in ligula blandit pulvinar ac a leo. Donec eu ante vitae neque laoreet rhoncus sed non dolor. Donec tempor, ex bibendum ultrices eleifend, risus lectus placerat nulla, at aliquam nulla nulla a nisl. Mauris vitae maximus augue. Sed convallis porta leo, non suscipit est iaculis sit amet. Curabitur accumsan tincidunt pretium. Ut dictum, metus sed lobortis interdum, enim lorem aliquam neque, eu convallis lectus turpis ut ante. Mauris odio est, posuere a nulla a, sagittis luctus felis. In semper leo vel commodo fringilla. Integer porta purus odio. Fusce mattis eget tellus at porta.',
    related: ['APP', 'HOW'],
  },
  HOW: {
    id: 9,
    name: 'How to conduct an effective research',
    school: 'Cornell University',
    department: 'BUSINESS',
    text:
      'HOW - Suspendisse bibendum ante magna, eu molestie nibh lacinia ac. Pellentesque est leo, pellentesque vitae interdum quis, consequat ut purus. Duis volutpat ante dui, in hendrerit est vestibulum in. Proin finibus et magna in consectetur. Sed lobortis malesuada augue blandit rhoncus. Vivamus iaculis sapien ac nulla aliquam, sed interdum felis tempor. Integer sed sollicitudin metus, a faucibus libero. Duis consectetur ultricies massa nec molestie. Sed a auctor mauris.',
    related: ['SOCW', 'FAM'],
  },
  SOCW: {
    id: 40,
    name: 'Social work licensing',
    school: 'Harvard University',
    department: 'SOCIOL',
    text:
      'SOCW - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
    related: ['BIO-101', 'FAM', 'HOW', 'AMER', 'APP'],
  },
  AMER: {
    id: 558,
    name: 'America in the world',
    school: 'University of California Berkeley',
    department: 'MANAG',
    text:
      'AMER - On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
    related: ['BIO-101', 'FAM', 'HOW'],
  },
}

export const MOCK_RELATED_DOCS: Doc['related'] = ['BIO-101', 'HOW', 'APP']

export const MOCK_BREADCRUMBS: Breadcrumbs = [
  'Stanford University',
  'BIO',
  'Introduction to Biology',
]
