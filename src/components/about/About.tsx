import { angel, devil } from 'assets';

const About = () => (
  <div className="flex flex-col m-10">
    <div className="ml-auto mr-auto gap-5 lg:grid lg:grid-cols-3 lg:place-items-center">
      <img className="justify-self-end p-5 w-80 " src={devil} alt="art" />
      <div className="text-base text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis a leo quis
        interdum. Ut nec est in lacus venenatis egestas. Mauris laoreet in tellus id porta. Donec
        fringilla sed arcu a gravida. Integer nec nunc ante. Mauris facilisis lectus elit, sed
        iaculis nulla euismod auctor. Sed at pulvinar erat, a pulvinar leo. Cras neque leo, pretium
        eget volutpat nec, vehicula vel neque. Curabitur a neque ac lorem elementum lobortis. Sed ac
        sagittis risus. Suspendisse at orci nec purus interdum viverra non id mauris. Donec congue
        hendrerit odio, eu suscipit augue placerat nec. In sit amet enim sem. Nunc at ante
        sollicitudin, malesuada metus sed, aliquet tortor. Maecenas convallis semper viverra. Aenean
        sit amet interdum enim. Nullam eu diam eu ex tincidunt mattis ac ut tellus. Quisque vel
        laoreet odio.
      </div>
      <img className="justify-self-start p-5 w-80" src={angel} alt="art" />
    </div>
  </div>
);

export default About;
