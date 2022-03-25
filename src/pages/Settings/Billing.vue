<template>
  <Widget
      title="Billing Information"
      class="custom-div"
  >
    <b-row>
      <b-col class="col-6">
        <h5> Next invoice: 181.50€ </h5>
      </b-col>
      <b-col class="col-6" align="right">
        <h5> Billing date: 18/03/2022 </h5>
      </b-col>
    </b-row>

    <div class="table-resposive">
      <table class="table">
        <thead>
          <tr>
            <th class="hidden-sm-down">#</th>
            <th>Picture</th>
            <th>Description</th>
            <th class="hidden-sm-down">Info</th>
            <th class="hidden-sm-down">Date</th>
            <th class="hidden-sm-down">Size</th>
            <th class="hidden-sm-down">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in tableStyles" :key="row.id">
            <td>{{row.id}}</td>
            <td>
              <img class="img-rounded" :src="row.picture" alt="" height="50" />
            </td>
            <td>
              {{row.description}}
              <div v-if="row.label">
                <b-badge :variant="row.label.colorClass">{{row.label.text}}</b-badge>
              </div>
            </td>
            <td>
              <p class="mb-0">
                <small>
                  <span class="fw-semi-bold">Type:</span>
                  <span class="text-muted">&nbsp; {{row.info.type}}</span>
                </small>
              </p>
              <p>
                <small>
                  <span class="fw-semi-bold">Dimensions:</span>
                  <span class="text-muted">&nbsp; {{row.info.dimensions}}</span>
                </small>
              </p>
            </td>
            <td class="text-semi-muted">
              {{parseDate(row.date)}}
            </td>
            <td class="text-semi-muted">
              {{row.size}}
            </td>
            <td class="width-150">
              <b-progress
                :variant="row.progress.colorClass" :value="row.progress.percent" :max="100"
                class="progress-sm mb-xs"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Widget>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Billing',
  components: { Widget },
  data() {
    return {
      tableStyles: [
        {
          id: 1,
          picture: require('../../assets/tables/1.jpg'), // eslint-disable-line global-require
          description: 'Palo Alto',
          info: {
            type: 'JPEG',
            dimensions: '200x150',
          },
          date: new Date('September 14, 2012'),
          size: '45.6 KB',
          progress: {
            percent: 29,
            colorClass: 'success',
          },
        },
        {
          id: 2,
          picture: require('../../assets/tables/2.jpg'), // eslint-disable-line global-require
          description: 'The Sky',
          info: {
            type: 'PSD',
            dimensions: '2400x1455',
          },
          date: new Date('November 14, 2012'),
          size: '15.3 MB',
          progress: {
            percent: 33,
            colorClass: 'warning',
          },
        },
        {
          id: 3,
          picture: require('../../assets/tables/3.jpg'), // eslint-disable-line global-require
          description: 'Down the road',
          label: {
            colorClass: 'danger',
            text: 'INFO!',
          },
          info: {
            type: 'JPEG',
            dimensions: '200x150',
          },
          date: new Date('September 14, 2012'),
          size: '49.0 KB',
          progress: {
            percent: 38,
            colorClass: 'inverse',
          },
        },
        {
          id: 4,
          picture: require('../../assets/tables/4.jpg'), // eslint-disable-line global-require
          description: 'The Edge',
          info: {
            type: 'PNG',
            dimensions: '210x160',
          },
          date: new Date('September 15, 2012'),
          size: '69.1 KB',
          progress: {
            percent: 17,
            colorClass: 'danger',
          },
        },
        {
          id: 5,
          picture: require('../../assets/tables/5.jpg'), // eslint-disable-line global-require
          description: 'Fortress',
          info: {
            type: 'JPEG',
            dimensions: '1452x1320',
          },
          date: new Date('October 1, 2012'),
          size: '2.3 MB',
          progress: {
            percent: 41,
            colorClass: 'primary',
          },
        },
      ],
    }
  },
  methods: {
    parseDate(date) {
      const dateSet = date.toDateString().split(' ');
      return `${date.toLocaleString('en-us', { month: 'long' })} ${dateSet[2]}, ${dateSet[3]}`;
    },
  }
};
</script>