const PendingWorkRow = ({pendingWork}) => {
    console.log(pendingWork)
    const {
        servicePhoto,
        serviceName,
        userEmail,
        serviceTakingDate,
        price,
      } = pendingWork;
  return (
    <div className="card card-side rounded-none border-b-2  borderStyle bg-base-100 shadow-xl">
      <figure className="w-1/3 ">
        <img src={servicePhoto} className="h-full" />
      </figure>
      <div className="card-body line  py-5 px-0 pl-2 md:px-10">
        <h2 className="card-title">{serviceName}</h2>
        <div className="flex">
          <div className="">
            <p>Client: {userEmail}</p>
            <p>{serviceTakingDate}</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PendingWorkRow;
